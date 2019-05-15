export class AuthService {
    constructor(
      private auth_url: string,
      private client_id: string,
      private response_type: string,
      private redirect_uri: string
    ) {}
  
    private token: string | null = null;
  
    authorize() {
      const url =
        `${this.auth_url}?client_id=${this.client_id}` +
        `&response_type=${this.response_type}` +
        `&redirect_uri=${this.redirect_uri}`;
        
      sessionStorage.removeItem('token')
      window.location.href = url;
    }
  
    getToken() {
      const token = sessionStorage.getItem("token");
      if (token) {
        this.token = JSON.parse(token);
      }
  
      if (window.location.hash && !this.token) {
        const match = window.location.hash.match(/#access_token=([^&]+)/);
        this.token = match && match[1];
        sessionStorage.setItem("token", JSON.stringify(this.token));
        window.location.hash = "";
      }
  
      if (!this.token) {
        this.authorize();
      }
      return this.token;
    }
  }

 
  