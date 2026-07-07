import { useState, useEffect } from "react";

export interface DeveloperConfig {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
  website: {
    portfolio: string;
  };
}

export const DEFAULT_DEVELOPER_CONFIG: DeveloperConfig = {
  name: "Ran Dev",
  contact: {
    phone: "0895602592430",
    whatsapp: "0895602592430",
  },
  community: {
    name: "Ran Dev Community",
    website: "https://community.randev.com",
    discord: "https://discord.gg/9KUN2byKRM",
  },
  website: {
    portfolio: "https://sfl.gl/x2ic",
  },
};

let cachedData: DeveloperConfig | null = null;
let activePromise: Promise<DeveloperConfig> | null = null;

export function useDeveloperConfig() {
  const [data, setData] = useState<DeveloperConfig>(cachedData || DEFAULT_DEVELOPER_CONFIG);
  const [loading, setLoading] = useState(!cachedData);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (cachedData) {
      setData(cachedData);
      setLoading(false);
      return;
    }

    if (!activePromise) {
      activePromise = fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Gagal mengambil data developer (Status: ${res.status})`);
          }
          return res.json();
        })
        .then((jsonData) => {
          cachedData = jsonData;
          return jsonData;
        })
        .catch((err) => {
          // If fetch fails, we cache the DEFAULT_DEVELOPER_CONFIG to prevent spamming subsequent retries
          cachedData = DEFAULT_DEVELOPER_CONFIG;
          activePromise = null;
          throw err;
        });
    }

    setLoading(true);
    activePromise
      .then((jsonData) => {
        setData(jsonData);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Could not fetch latest developer config, using local copy:", err.message);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
