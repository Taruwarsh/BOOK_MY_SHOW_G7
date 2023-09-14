using BookMyshowAPI.Models.Domain;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;

namespace BookMyshowAPI.Models.DataLayer
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options): base(options) 
        {
            
        }
        public DbSet<Users>? Users { get; set; }

        public DbSet<Movies> ? Movies { get; set; }

        public DbSet<City>? City { get; set; }
        public DbSet<Cinemas> Cinemas { get; set; }
        public DbSet<BookingDetails> BookingDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId);
            });
            modelBuilder.Entity<Cinemas>(entity =>
            {
                entity.HasKey(e => e.CinemaId);
            });
            modelBuilder.Entity<Movies>(entity =>
            {
                entity.HasKey(e => e.MovieId);
            });
            modelBuilder.Entity<BookingDetails>(entity =>
            {
                entity.HasKey(e => e.BookingId);
            });


            base.OnModelCreating(modelBuilder);
        }

    }
}
