using System.Text;
using System.Text.Json;

namespace ClientHTTP;

internal static class Program
{
    static async Task Main()
    {
        string apiUrl = "http://185.244.219.179:8080/api/accounts/user.login";
        
        using (HttpClient client = new HttpClient())
        {
            var data = new { email = "string", password = "string" };

            var json = JsonSerializer.Serialize(data);
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            
            HttpResponseMessage response = await client.PostAsync(apiUrl, content);

            if (response.IsSuccessStatusCode)
            {
                
                string result = await response.Content.ReadAsStringAsync();
                Console.WriteLine(result);
                if (response.Headers.TryGetValues("Set-Cookie", out var cookieHeaderValues))
                {
                    // Get the first cookie
                    var cookie = cookieHeaderValues.FirstOrDefault();

                    // Parse the cookie string to get the individual cookie values
                    var cookieParts = cookie.Split(';');
                    var cookieNameValue = cookieParts[0];
                    var cookieName = cookieNameValue.Split('=')[0];
                    var cookieValue = cookieNameValue.Split('=')[1];

                    // Do something with the cookie
                    Console.WriteLine($"Cookie Name: {cookieName}");
                    Console.WriteLine($"Cookie Value: {cookieValue}");
                }
            }
            else
            {
                Console.WriteLine($"Error: {response.StatusCode}");
            }
        }
    }
}