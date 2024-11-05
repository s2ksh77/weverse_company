import axios from "axios";

class ReservationRepository {
  async getReservations() {
    const response = await axios.get(
      `http://localhost:3001/reservations?_sort=-reservedAt`
    );
    return response.data;
  }

  async getReservation(id: string) {
    const response = await axios.get(
      `http://localhost:3001/reservations/${id}`
    );
    return response.data;
  }

  async createReservation(dto) {
    const response = await axios.post(
      `http://localhost:3001/reservations`,
      dto
    );
    return response.data;
  }

  async deleteReservation(id) {
    const response = await axios.patch(
      `http://localhost:3001/reservations/${id}`
    );
    return response.data;
  }
}

export const reservationRepository = new ReservationRepository();
