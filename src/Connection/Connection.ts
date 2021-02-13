export interface Connection {
    name: string;
    lanConnection?: LanConnection;
    sshConnection?: SshConnection;
}

interface LanConnection {
    macAddress: string;
}

interface SshConnection {
    domain: string;
    username: string;
    password: string;
    port: number;
}
