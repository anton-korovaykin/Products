using System.Collections.Generic;
using System.Web.Http;
using Products.Models;

namespace Products.Controllers
{
    public class ProductController : ApiController
    {
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            var context = new DAL.Products();
            return context.GetAll();

        }

        [System.Web.Http.HttpGet]
        public Product Get(int id)
        {
            var context = new DAL.Products();
            return context.GetById(id);
        }

        [System.Web.Http.HttpPost]
        public Product Post(Product product)
        {
            var context = new DAL.Products();
            return context.Add(product);
        }

        [System.Web.Http.HttpPut]
        public Product Put(Product product)
        {
            var context = new DAL.Products();
            return context.Update(product);
        }

        [System.Web.Http.HttpDelete]
        public void Delete(int id)
        {
            var context = new DAL.Products();
            context.Delete(id);
        }
    }
}
