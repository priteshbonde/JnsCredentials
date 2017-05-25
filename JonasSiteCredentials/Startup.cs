using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JonasSiteCredentials.Startup))]
namespace JonasSiteCredentials
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
