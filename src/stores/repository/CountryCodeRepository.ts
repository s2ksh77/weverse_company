import axios from "axios";

class CountryCodeRepository {
  async getCodes() {
    const response = await axios.get(`http://localhost:3001/country-code`);
    return response.data;
  }
}

export const countryCodeRepository = new CountryCodeRepository();
