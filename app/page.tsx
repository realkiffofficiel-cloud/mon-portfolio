export default function Home() {
  return (
    <main style={{background:"#080810",color:"#e8e8f0",minHeight:"100vh",fontFamily:"sans-serif"}}>

      <nav style={{position:"fixed",top:0,left:0,right:0,height:64,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 40px",background:"rgba(8,8,16,0.9)",borderBottom:"1px solid rgba(255,255,255,0.05)",zIndex:100}}>
        <span style={{fontWeight:700,fontSize:15}}>CDA</span>
        <div style={{display:"flex",gap:24}}>
          <a href="#projets" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none",fontSize:13}}>Projets</a>
          <a href="#contact" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none",fontSize:13}}>Contact</a>
        </div>
      </nav>

      <section style={{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"100px 40px 60px"}}>
        <p style={{color:"#6c63ff",fontSize:14,marginBottom:16,fontFamily:"monospace"}}>Développeur Frontend & Design.
          Cosmos Digital Agency.
        </p>
        <h1 style={{fontSize:"clamp(40px,7vw,76px)",fontWeight:800,lineHeight:1.0,marginBottom:24}}>
          Frank Tony<br />
          <span style={{color:"#6c63ff"}}>Djam.</span>
        </h1>
        <p style={{fontSize:16,color:"rgba(232,232,240,0.45)",maxWidth:500,lineHeight:1.7,marginBottom:40}}>
          Je transforme vos idées en expériences digitales modernes, rapides et visuellement attractives.
        </p>
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
          <a href="#projets" style={{background:"#6c63ff",color:"#fff",padding:"13px 28px",borderRadius:8,textDecoration:"none",fontWeight:600,fontSize:14}}>Voir mes projets →</a>
          <a href="#contact" style={{background:"transparent",color:"#e8e8f0",padding:"13px 28px",borderRadius:8,textDecoration:"none",fontSize:14,border:"1px solid rgba(255,255,255,0.2)"}}>Me contacter</a>
          <a href="https://wa.me/237693425068" target="_blank" rel="noopener noreferrer" style={{background:"transparent",color:"#22c55e",padding:"13px 28px",borderRadius:8,textDecoration:"none",fontWeight:600,fontSize:14,border:"1px solid rgba(34,197,94,0.35)"}}>WhatsApp</a>
        </div>
      </section>

      <section id="projets" style={{padding:"80px 40px",borderTop:"1px solid rgba(255,255,255,0.06)"}}>
        <p style={{color:"#6c63ff",fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",marginBottom:12}}>— RÉALISATIONS</p>
        <h2 style={{fontSize:36,fontWeight:800,marginBottom:48}}>Mes Projets</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16}}>
          {[
            {nom:"SOPAKI",desc:"Site web de livraison d'eau avec système de parrainage multi-niveaux",lien:"https://sopaki.vercel.app",tag:"Web"},
            {nom:"Chevy Space",desc:"Site web moderne et dynamique",lien:"https://space-chevy-wbyc.vercel.app",tag:"Web"},
            {nom:"Lili's Dreadshouse",desc:"Identité visuelle et présence en ligne",lien:"https://rmch-2-dreads.vercel.app",tag:"Design"},
            {nom:"Real Modula",desc:"Site vitrine professionnel",lien:"https://rmch-site.vercel.app",tag:"Web"},
            {nom:"Ndap Store",desc:"Boutique en ligne moderne",lien:"https://ndap-store.vercel.app",tag:"E-commerce"},
          ].map((p) => (
            <a key={p.nom} href={p.lien} target="_blank" rel="noopener noreferrer"
              style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:14,padding:28,textDecoration:"none",display:"block"}}>
              <span style={{background:"rgba(108,99,255,0.1)",color:"rgba(108,99,255,0.8)",fontSize:11,padding:"3px 10px",borderRadius:20,fontFamily:"monospace"}}>{p.tag}</span>
              <h3 style={{fontSize:20,fontWeight:700,marginTop:16,marginBottom:6,color:"#e8e8f0"}}>{p.nom}</h3>
              <p style={{fontSize:13,color:"rgba(232,232,240,0.4)",marginBottom:12}}>{p.desc}</p>
              <p style={{fontFamily:"monospace",fontSize:11,color:"rgba(108,99,255,0.5)"}}>{p.lien.replace("https://","")}</p>
            </a>
          ))}
        </div>
      </section>

      <section style={{padding:"80px 40px",borderTop:"1px solid rgba(255,255,255,0.06)"}}>
        <p style={{color:"#6c63ff",fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",marginBottom:12}}>— TECHNOLOGIES</p>
        <h2 style={{fontSize:36,fontWeight:800,marginBottom:48}}>Compétences</h2>
        <div style={{display:"flex",flexWrap:"wrap",gap:12}}>
          {["HTML","CSS","Tailwind CSS","Next.js","React"].map((s) => (
            <span key={s} style={{background:"rgba(108,99,255,0.1)",border:"1px solid rgba(108,99,255,0.2)",color:"rgba(232,232,240,0.7)",fontSize:14,padding:"8px 20px",borderRadius:20}}>{s}</span>
          ))}
        </div>
      </section>

      <section id="contact" style={{padding:"80px 40px",borderTop:"1px solid rgba(255,255,255,0.06)"}}>
        <p style={{color:"#6c63ff",fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",marginBottom:12}}>— CONTACT</p>
        <h2 style={{fontSize:36,fontWeight:800,marginBottom:12}}>Travaillons ensemble</h2>
        <p style={{color:"rgba(232,232,240,0.4)",fontSize:15,marginBottom:40}}>Disponible pour des projets freelance et collaborations.</p>
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
          <a href="mailto:realtechnology574@gmail.com" style={{background:"#6c63ff",color:"#fff",padding:"13px 28px",borderRadius:8,textDecoration:"none",fontWeight:600,fontSize:14}}>realtechnology574@gmail.com</a>
          <a href="https://wa.me/237693425068" target="_blank" rel="noopener noreferrer" style={{background:"transparent",color:"#22c55e",padding:"13px 28px",borderRadius:8,textDecoration:"none",fontWeight:600,fontSize:14,border:"1px solid rgba(34,197,94,0.35)"}}>WhatsApp +237 693 425 068</a>
        </div>
      </section>

      <footer style={{padding:"24px 40px",borderTop:"1px solid rgba(255,255,255,0.06)",display:"flex",justifyContent:"space-between"}}>
        <span style={{fontFamily:"monospace",fontSize:12,color:"rgba(232,232,240,0.25)"}}>© 2026 mon-portfolio. REAL</span>
        <span style={{fontFamily:"monospace",fontSize:12,color:"rgba(232,232,240,0.25)"}}>Développeur Frontend & Design, chez Cosmos Digital Agency.</span>
      </footer>

    </main>
  );
}