 using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookMyshowAPI.Models.DataLayer;
using BookMyshowAPI.Models.Domain;

namespace BookMyshowAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingDetailsController : ControllerBase
    {
        private readonly AppDBContext _context;

        public BookingDetailsController(AppDBContext context)
        {
            _context = context;
        }

        // GET: api/BookingDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookingDetails>>> GetBookingDetails()
        {
          if (_context.BookingDetails == null)
          {
              return NotFound();
          }
            return await _context.BookingDetails.ToListAsync();
        }

        // GET: api/BookingDetails/5
        [HttpGet("{UserId}")]
        public async Task<IActionResult> Get(int UserId)
        {
            var bookingDetails = await _context.BookingDetails.Where(u => u.UserId == UserId).ToListAsync();
            if (bookingDetails == null)
                return NotFound();
            return Ok(bookingDetails);
        }

        // PUT: api/BookingDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookingDetails(int id, BookingDetails bookingDetails)
        {
            if (id != bookingDetails.BookingId)
            {
                return BadRequest();
            }

            _context.Entry(bookingDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookingDetailsExists(id))
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

        // POST: api/BookingDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BookingDetails>> PostBookingDetails(BookingDetails bookingDetails)
        {
          if (_context.BookingDetails == null)
          {
              return Problem("Entity set 'AppDBContext.BookingDetails'  is null.");
          }
            _context.BookingDetails.Add(bookingDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookingDetails", new { id = bookingDetails.BookingId }, bookingDetails);
        }

        // DELETE: api/BookingDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookingDetails(int id)
        {
            if (_context.BookingDetails == null)
            {
                return NotFound();
            }
            var bookingDetails = await _context.BookingDetails.FindAsync(id);
            if (bookingDetails == null)
            {
                return NotFound();
            }

            _context.BookingDetails.Remove(bookingDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookingDetailsExists(int id)
        {
            return (_context.BookingDetails?.Any(e => e.BookingId == id)).GetValueOrDefault();
        }
    }
}
