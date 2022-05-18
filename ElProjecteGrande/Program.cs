using ElProjecteGrande.Daos;
using ElProjecteGrande.Models;
using ElProjecteGrande.Services;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

var builder = WebApplication.CreateBuilder(args);

void StartBat()
{
    try
    {
        string batDir = string.Format(@"");
        var proc = new Process();
        proc.StartInfo.WorkingDirectory = batDir;
        proc.StartInfo.FileName = "start.bat";
        proc.StartInfo.CreateNoWindow = false;
        proc.Start();
        Console.WriteLine("Bat file executed !!");
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.StackTrace.ToString());
    }
}

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<DatingContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddSingleton<IDataManager>(new DataManager());
builder.Services.AddSingleton<IDogCreator>(new DogCreator());
builder.Services.AddSingleton<IDogManager>(new DogManager());

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

    app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

StartBat();
app.Run();
