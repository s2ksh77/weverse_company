import axios from "axios";

class BoothRepository {
  async getBooths() {
    const response = await axios.get(`http://localhost:3001/booths`);
    return response.data;
  }

  async getBoothById(id: string) {
    const response = await axios.get(`http://localhost:3001/details/${id}`);
    return response.data;
  }
}

export const boothRepository = new BoothRepository();
