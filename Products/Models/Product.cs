using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Products.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [Column(TypeName = "image")]
        public byte[] Image { get; set; }
        public int Price { get; set; }
        public DateTime LastUpdate { get; set; }
    }
}