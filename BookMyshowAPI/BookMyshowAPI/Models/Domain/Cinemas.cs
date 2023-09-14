using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace BookMyshowAPI.Models.Domain
{
    public class Cinemas
    {
        [Key]
        public int CinemaId { get; set; }
        public string CinemaName { get; set; }

        public string Location { get; set; }
        public int Capacity { get; set; }
    }
}
