namespace BookMyshowAPI.Models.Domain
{
    public class Movies
    { 
        public int MovieId { get; set; }
        public string Title { get; set; } = string.Empty;

        public string MovieType { get; set; } = string.Empty;

        public string ReleaseDate { get; set; } = string.Empty;

        public string Duration { get; set; } = string.Empty;

        public string Language { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public string ImageUrl { get; set; } = string.Empty;
    }
}
