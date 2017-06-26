import * as crypto from 'crypto';

export function trace(...args:any[]) {
    console.log(args);
}

export function checkSignedString(signature: string, data: string) {
    return crypto.createHmac('sha256', this.options.privateKey)
        .update(data)
        .digest('base64') === signature;
}