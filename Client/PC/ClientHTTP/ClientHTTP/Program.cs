namespace ClientHTTP;

internal static class Program
{
    static async Task Main()
    {
        string apiUrl = "http://185.244.219.179:8080/api/catalogs/list";
        
        using (HttpClient client = new HttpClient())
        {
            HttpResponseMessage response = await client.GetAsync(apiUrl);

            if (response.IsSuccessStatusCode)
            {
                string result = await response.Content.ReadAsStringAsync();
                Console.WriteLine(result);
            }
            else
            {
                Console.WriteLine($"Error: {response.StatusCode}");
            }
        }
    }
}