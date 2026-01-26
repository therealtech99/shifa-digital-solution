# DNS Configuration for shifadigitalsolution.in

## Quick DNS Setup

Add these DNS records at your domain registrar:

### Option 1: A Records (Root Domain)

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600 (or Auto)

Type: A
Name: @
Value: 76.223.126.88
TTL: 3600 (or Auto)
```

### Option 2: CNAME (www subdomain)

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

### Option 3: Use Vercel Nameservers (Easiest)

If your registrar supports it, use Vercel's nameservers:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

This is the easiest option - Vercel manages all DNS automatically.

---

## Step-by-Step by Registrar

### GoDaddy
1. Login → My Products → DNS
2. Click "Add" under Records
3. Add A records (Type: A, Name: @, Value: 76.76.21.21)
4. Add second A record (Value: 76.223.126.88)
5. Add CNAME (Type: CNAME, Name: www, Value: cname.vercel-dns.com)

### Namecheap
1. Login → Domain List → Manage → Advanced DNS
2. Add New Record → A Record
3. Host: @, Value: 76.76.21.21
4. Add second A record: Value: 76.223.126.88
5. Add CNAME: Host: www, Value: cname.vercel-dns.com

### Google Domains
1. Login → DNS → Custom records
2. Add A record: Name: @, IPv4: 76.76.21.21
3. Add A record: Name: @, IPv4: 76.223.126.88
4. Add CNAME: Name: www, Domain name: cname.vercel-dns.com

### Cloudflare
1. Login → Select domain → DNS
2. Add A record: Name: @, IPv4: 76.76.21.21, Proxy: DNS only
3. Add A record: Name: @, IPv4: 76.223.126.88, Proxy: DNS only
4. Add CNAME: Name: www, Target: cname.vercel-dns.com, Proxy: DNS only

---

## Verify DNS

After adding records, verify:
1. Wait 5-60 minutes
2. Check: https://dnschecker.org
3. Enter: shifadigitalsolution.in
4. Should show your A records globally

---

## Vercel Domain Status

In Vercel dashboard:
- ✅ "Valid Configuration" = DNS is correct
- ⏳ "Pending" = Waiting for DNS propagation
- ❌ "Invalid Configuration" = Check DNS records

---

**Note**: DNS changes can take 5 minutes to 48 hours to propagate globally.
