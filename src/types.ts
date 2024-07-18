export interface AssetItem {
    grade: string;
    lastSeen: number;
    name: string;
    total_vuls: number;
    type: string;
}

export interface Metrics {
    ips: number;
    live: number[];
    monitored: number[];
    ports: number;
    total: number;
    total_live: number;
    total_monitored: number;
    vulns: number;
}

export interface Data {
    assets: AssetItem[];
    cloud: Metrics;
    domain: Metrics;
    ip: Metrics;
}

export type CardNameType = 'domain' | 'ip' | 'cloud'