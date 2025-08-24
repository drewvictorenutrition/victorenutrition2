// pages/index.js
export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#e6f4ea', minHeight: '100vh', padding: '50px' }}>
      <img src="/logo.png" alt="VictorE Nutrition Logo" style={{ maxWidth: '200px', marginBottom: '20px' }} />
      <h1 style={{ color: '#2e7d32' }}>Welcome to VictorE Nutrition</h1>
      <p style={{ fontSize: '18px', color: '#333', marginTop: '10px' }}>
        Professional. Sleek. Fun. Nutrition designed for performance.
      </p>
      <button style={{ marginTop: '30px', padding: '12px 24px', fontSize: '16px', backgroundColor: '#2e7d32', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
        Explore Products
      </button>
    </div>
  )
}
