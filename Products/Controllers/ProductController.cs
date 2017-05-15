using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using Products.Models;

namespace Products.Controllers
{
    [EnableCors(origins: "http://localhot:4200", headers: "*", methods: "*")]
    public class ProductController : ApiController
    {
        public IEnumerable<Product> Get()
        {
            var context = new DAL.Products();
            return context.GetAll();

        }

        public Product Get(int id)
        {
            var context = new DAL.Products();
            return context.GetById(id);
        }

        public Product Post(Product product)
        {
            var context = new DAL.Products();
            return context.Add(product);
        }

        public Product Put(Product product)
        {
            var context = new DAL.Products();
            return context.Update(product);
        }

        public void Delete(int id)
        {
            var context = new DAL.Products();
            context.Delete(id);
        }
    }
}
