using System.ComponentModel.DataAnnotations.Schema;

namespace BookMyshowAPI.Models.Domain
{
    public class BookingDetails
    {
        public int  BookingId { get; set; }
        
        public int UserId { get; set; }
        
        public string MovieName { get; set; } = string.Empty;

        public string HallName { get; set; } = string.Empty;

        public string BookingDate { get; set; } = string.Empty;

        public string Time { get; set; } = string.Empty;
       
        public string BookingType { get; set; } = string.Empty;

        public string SeatNo { get; set; } = string.Empty;

        public double TotalAmount { get; set; }
    }
}
