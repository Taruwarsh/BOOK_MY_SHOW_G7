using BookMyshowAPI.Models.DataLayer;
using BookMyshowAPI.Models.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookMyshowAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CinemasController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly AppDBContext _context;

        public CinemasController(IConfiguration configuration,AppDBContext dBContext)
        {
            _configuration = configuration;
            _context = dBContext;
        }
        // GET: api/<CinemasController>
        [HttpGet]

        public IActionResult Get()
        {
            string connectionString = _configuration.GetConnectionString("DefaultConnection");
            using (SqlConnection con = new(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("SELECT * FROM Cinemas", con))
                {
                    cmd.CommandType = CommandType.Text;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    List<Cinemas> Cinemass = new List<Cinemas>();
                    while (rdr.Read())
                    {
                        Cinemas Cinemas = new Cinemas();
                        Cinemas.CinemaId = Convert.ToInt32(rdr["CinemaId"]);
                        Cinemas.CinemaName = rdr["CinemaName"].ToString();
                        Cinemas.Location = rdr["Location"].ToString();
                        Cinemas.Capacity = Convert.ToInt32(rdr["Capacity"]);
                        Cinemass.Add(Cinemas);
                    }
                    return Ok(Cinemass);
                }
            }
        }

        // GET api/<CinemasController>/5
        [HttpGet("{Location}")]
        public async Task<IActionResult> Get(string Location)
        {
            var Cinemas = await _context.Cinemas.Where(u=>u.Location==Location).ToListAsync();
            if (Cinemas == null)
                return NotFound();
            return Ok(Cinemas);
        }

        // POST api/<CinemasController>
        [HttpPost]
        public IActionResult Post([FromBody] Cinemas Cinemas)
        {
            string connectionString = _configuration.GetConnectionString("DefaultConnection");
            using (SqlConnection con = new(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("INSERT INTO Cinemas (CinemaId, CinemaName,Location,Capacity) VALUES (@CinemaId, @CinemaName,@Location,@Capacity)", con))
                {
                    cmd.CommandType = CommandType.Text;
                    cmd.Parameters.AddWithValue("@CinemaId", Cinemas.CinemaId);
                    
                    cmd.Parameters.AddWithValue("@CinemaName", Cinemas.CinemaName);
                    cmd.Parameters.AddWithValue("@Location", Cinemas.Location);
                    cmd.Parameters.AddWithValue("@Capacity", Cinemas.Capacity);
                    con.Open();
                    int rowsAffected = cmd.ExecuteNonQuery();
                    if (rowsAffected > 0)
                        return Ok();
                    else
                        return BadRequest();
                }
            }
        }

        // PUT api/<CinemasController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCinemas(int id, Cinemas Cinemas)
        {
            if (id != Cinemas.CinemaId)
            {
                return BadRequest();
            }

            _context.Entry(Cinemas).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CinemasExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE api/<CinemasController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCinema(int id)
        {
            if (_context.Cinemas == null)
            {
                return NotFound();
            }
            var Cinemas = await _context.Cinemas.FindAsync(id);
            if (Cinemas == null)
            {
                return NotFound();
            }

            _context.Cinemas.Remove(Cinemas);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        private bool CinemasExists(int id)
        {
            return (_context.Movies?.Any(e => e.MovieId == id)).GetValueOrDefault();
        }
    }
}
