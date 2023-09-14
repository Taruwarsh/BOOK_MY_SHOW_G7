using System.ComponentModel.DataAnnotations;

namespace BookMyshowAPI.DTO
{
    public class RegisterUserDto
    {
        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; } = string.Empty;
        [Required(ErrorMessage = "First Name is required")]
        public string Name { get; set; } = string.Empty;
        [Required(ErrorMessage = " Name is required")]
        
        public string Password { get; set; } = string.Empty;
    }
}
