import { Axios } from "axios"

export class MyService {
  private http: Axios

  constructor(httpBaseURL: string) {
    this.http = new Axios({
      baseUrl: httpBaseURL
    })
  }

  async myMethod() {
    const response = await this.http.get('/my-endpoint')
    return response.data
  }
}