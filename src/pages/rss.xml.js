import {services} from '../data';
import {siteOrigin} from '../site';
const escapeXml=value=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function GET(){
 const items=services.map(s=>{const url=`${siteOrigin}/services/${s.slug}/`;return `<item><title>${escapeXml(s.name)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><description>${escapeXml(s.description)}</description></item>`}).join('');
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Linis Co — Cleaning services</title><link>${siteOrigin}/</link><description>Explore cleaning services from Linis Co PH.</description><language>en-PH</language><atom:link href="${siteOrigin}/rss.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`,{headers:{'Content-Type':'application/rss+xml; charset=utf-8'}});
}
