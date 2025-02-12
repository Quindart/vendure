import { VendureLogger } from '@vendure/core';
import fs from 'fs';

export class SimpleFileLogger implements VendureLogger {
    private logfile: fs.WriteStream;

    constructor(logfileLocation: string) {
        this.logfile = fs.createWriteStream(logfileLocation, { flags: 'w' });
    }

    error(message: string, context?: string) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        this.logfile.write(`ERROR: [${context}] ${message}\n`);
    }
    warn(message: string, context?: string) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        this.logfile.write(`WARN: [${context}] ${message}\n`);
    }
    info(message: string, context?: string) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        this.logfile.write(`INFO: [${context}] ${message}\n`);
    }
    verbose(message: string, context?: string) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        this.logfile.write(`VERBOSE: [${context}] ${message}\n`);
    }
    debug(message: string, context?: string) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        this.logfile.write(`DEBUG: [${context}] ${message}\n`);
    }
}

