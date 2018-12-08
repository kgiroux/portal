import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs';
import { serviceUrl, ServiceUrlNames} from '../utils/urlconfig';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { v4 as uuid } from 'uuid';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public cryptoJS: any;

  constructor(private http: HttpClient) {
    // Fix for AOT
    if (CryptoJS.hasOwnProperty('__moduleExports')) {
      this.cryptoJS = CryptoJS['__moduleExports'];
    } else {
      this.cryptoJS = CryptoJS;
    }
  }
  /**
   * [performEncryption encrypt the word according of the type]
   * @param      word       [the word that need to be encrypt]
   * @param      type       [type of encryption]
   * @param      passPhrase [optional only if we use aes ]
   * @return                [the word encrypted]
   */
  public performEncryption(word: string, type: string, passPhrase: string = ''): string {
    switch (type) {
      case 'sha224':
        return this.performSHA224Encryption(word);
      case 'sha256':
        return this.performSHA256Encryption(word);
      case 'sha384':
        return this.performSHA384Encryption(word);
      case 'sha512':
        return this.performSHA512Encryption(word);
      case 'md5':
        return this.performMD5Encryption(word);
      case 'sha1':
        return this.performSHA1Encryption(word);
      case 'sha3':
        return this.performSHA3Encryption(word);
      case 'aes':
        return this.performAESEncryption(word, passPhrase);
      case 'base64':
        return this.performBase64Encryption(word);
      default:
        return 'ERROR!';
    }

  }
  /**
   * [performBase64Encryption perfom a Base64 encryption]
   * @param word [description]
   */
  private performBase64Encryption(word: string): string {
    return btoa(word);
  }
  /**
   * [performSHA224Encryption perfom a SHA224 encryption]
   * @param   word [the word that need to be encrypted]
   * @return       [the encrypted string]
   */
  private performSHA224Encryption(word: string): string {
    return this.cryptoJS.SHA224(word).toString();
  }
  /**
   * [performSHA256Encryption perfom a SHA256 encryption]
   * @param   word [the word that need to be encrypted]
   * @return       [the encrypted string]
   */
  private performSHA256Encryption(word: string): string {
    return this.cryptoJS.SHA256(word).toString();
  }
  /**
   * [performSHA384Encryption perfom a SHA384 encryption]
   * @param   word [the word that need to be encrypted]
   * @return       [the encrypted string]
   */
  private performSHA384Encryption(word: string): string {
    return this.cryptoJS.SHA384(word).toString();
  }
  /**
   * [performSHA256Encryption perfom a SHA512 encryption]
   * @param   word [the word that need to be encrypted]
   * @return       [the encrypted string]
   */
  private performSHA512Encryption(word: string): string {
    return this.cryptoJS.SHA512(word).toString();
  }
  /**
   * [performSHA256Encryption perfom a MD5 encryption]
   * @param   word [the word that need to be encrypted]
   * @return       [the encrypted string]
   */
  private performMD5Encryption(word: string): string {
    return this.cryptoJS.MD5(word).toString();
  }

  /**
   * [performSHA1Encryption perfom a SHA1 encryption]
   * @param   word [the word that need to be encrypted]
   * @return       [the encrypted string]
   */
  private performSHA1Encryption(word: string): string {
    return this.cryptoJS.SHA1(word).toString();
  }
  /**
   * [performSHA3Encryption perfom a SHA3 encryption]
   * @param   word [the word that need to be encrypted]
   * @return       [the encrypted string]
   */
  private performSHA3Encryption(word: string): string {
    return this.cryptoJS.SHA3(word).toString();
  }

  /**
   * [performAESEncryption perfom a AES encryption]
   * @param   word [the word that need to be encrypted]
   * @param   passPhrase [the passPhrase that is need to perform a encryption]
   * @return       [the encrypted string]
   */
  private performAESEncryption(word: string, passPhrase: string): string {
    return this.cryptoJS.AES.encrypt(word, passPhrase).toString();
  }
  /**
   * Perform an authentication.
   * @param login login
   * @param password password
   */
  public authentication(login: string, password: string): Observable<Object> {
    const encryptedHeader: string =
      this.performEncryption(login + ':' +
        this.performEncryption(password, environment.login.protocol), 'base64');
    const _headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    _headers.append('Authentication', 'Basic ' + encryptedHeader);
    return this.http
      .put(serviceUrl(ServiceUrlNames.USER, '/authenticate/' + btoa('Basic ' + encryptedHeader)), null, { headers: _headers });
  }

  /**
   * Subscribe for create a account
   * @param email email
   * @param password password
   * @param username username
   */
  public subscription(email: string, password: string, username: string) {
    const id = uuid();
    const _headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    const passwordEncrypted = this.performEncryption(password, environment.login.protocol);
    const data = {
      'id': id,
      'login': username,
      'email': email,
      'password': passwordEncrypted,
      'typeUser': 'WEBAPP_USER'
    };
    return this.http.put(serviceUrl(ServiceUrlNames.USER, ''), data, {headers: _headers});
  }
}
