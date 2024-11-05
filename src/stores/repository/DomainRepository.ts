import axios from "axios";

class DomainRepository {
  async getDomains() {
    const response = await axios.get(`http://localhost:3001/email-domain`);
    return response.data;
  }
}

export const domainRepository = new DomainRepository();
