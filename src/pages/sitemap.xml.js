import {services, areas} from '../data';
import {siteOrigin} from '../site';
export function GET() {
 const paths=['/','/privacy/','/cookies/',...services.map(s=>`/services/${s.slug}/`),...areas.map(a=>`/areas/${a.toLowerCase().replaceAll(' ','-')}/`)];
 const xml=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path=>`<url><loc>${new URL(path,siteOrigin).href}</loc></url>`).join('')}</urlset>`;
 return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
