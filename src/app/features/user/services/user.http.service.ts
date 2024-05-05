import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private readonly server: string = environment.domain;

  public fetchConversionStatus(conversionId: string): Observable<any> {
    return this.http.get<any>(`${this.server}/file/status/convert/${conversionId}`);
  }

  public convertFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<any>(`${this.server}/uploadFile`, formData);
  }
}
