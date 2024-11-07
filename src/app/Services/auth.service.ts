import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://api.mdintegrations.com/v1/partner/auth/token';
  private voucherUrl = 'https://api.mdintegrations.com/v1/partner/vouchers';
  getToken() {
    const body = {
      grant_type: 'client_credentials',
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
      scope: '*',
    };
    return this.http.post(this.apiUrl, body);
  }

  createVoucher(token: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    const requestBody = {
      hold_status: false,
      patient_id: null,
      questionnaire_id: environment.questionnaire_id,
      case_services: [],
      case_prescriptions: [],
      disease: [],
    };

    return this.http.post(this.voucherUrl, requestBody, { headers: headers });
  }
}
