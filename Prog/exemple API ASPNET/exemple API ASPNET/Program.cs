using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using exemple_API_ASPNET.Data;
namespace exemple_API_ASPNET
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<exemple_API_ASPNETContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("exemple_API_ASPNETContext") ?? throw new InvalidOperationException("Connection string 'exemple_API_ASPNETContext' not found.")));

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            using (var scope = app.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                SeedData.Initialize(services);
            }

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}