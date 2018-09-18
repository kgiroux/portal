/**
 * Payload of the token
 */
export class TokenPayload {
    /**
     * [iat when was the token issued at]
     */
    public iat: number;
    /**
     * [exp when the token expires]
     */
    public exp: number;
    /**
     * [iss issuer who the token is destined to]
     */
    public iss: string;
    /**
     * Map for the right
     */
    public rights: { [key: string]: string };
    /**
     * [sub connexion login]
     */
    public sub: string;
}
