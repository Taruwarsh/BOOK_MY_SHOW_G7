using AutoMapper;
using BookMyshowAPI.DTO;
using BookMyshowAPI.Models.DataLayer;
using BookMyshowAPI.Models.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.Scripting;
using Microsoft.EntityFrameworkCore;


namespace BookMyshowAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly AppDBContext _context;
        private readonly IMapper _mapper;

        public UserController(IConfiguration configuration, AppDBContext dBContext, IMapper mapper)
        {
            _configuration = configuration;
            _context = dBContext;
            _mapper = mapper;
        }


        /*[HttpPost]
        [Route("signUp")]
        public async Task<IActionResult> RegisterUser(RegisterUserDto userDTO)
        {
            bool emailExists = await IsEmailExists(userDTO.Email);
            if (emailExists)
            {
                return BadRequest("User with the specified email already exists.");
            }
            userDTO.Password = BCrypt.Net.BCrypt.HashPassword(userDTO.Password);
            Users newUser = _mapper.Map<Users>(userDTO);
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "User Registered Successfully"
            });
        }
        public async Task<bool> IsEmailExists(string email)
        {
            // Check if the email already exists in the database
            bool emailExists = await _context.Users.AnyAsync(u => u.Email == email);
            return emailExists;
        }*/

        /*[HttpPost]
        [Route("login")]
        public async Task<IActionResult> LoginUser(LoginUserDto loginDTO)
        {
            var userDTO = await LoginUserCheck(loginDTO);

            if (userDTO != null)
            {
                return Ok(userDTO);
            }
            else
            {
                return NotFound();
            }
        }
        public async Task<Users> LoginUserCheck(LoginUserDto userDTO)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == userDTO.Email);



            var isvalid = BCrypt.Net.BCrypt.Verify(userDTO.Password, user.Password);
            if (isvalid)
            {
                // Mapping User to UserDTO
                Users authUser = _mapper.Map<Users>(user);
                return authUser;
            }



            return null;
        }*/
    }
}
