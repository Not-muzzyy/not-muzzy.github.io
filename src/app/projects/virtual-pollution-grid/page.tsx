import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Virtual Pollution Intel Grid Case Study | Mohammed Muzammil C',
  description: 'Interactive geospatial monitoring dashboard with 7-day AI risk forecasting and scenario simulations.',
};

export default function PollutionGridPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col pt-24 pb-12">
        <Navbar />
        <section className="flex-grow">
          <div className="section-label">Case Study</div>
          <h1 className="section-title" style={{ marginBottom: '24px' }}>Pollution Intel Grid</h1>
          <p className="hero-tagline" style={{ marginBottom: '64px' }}>
            Interactive geospatial monitoring dashboard with 7-day AI risk forecasting and scenario simulations.
          </p>

          <div className="about-grid">
             <div className="about-text-column">
                <h2 className="glow-text" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>What is the Intel Grid?</h2>
                <div className="about-text">
                  <p>An interactive environmental intelligence platform that visualizes pollution metrics on a geospatial grid, predicting upcoming environmental hazards and allowing users to simulate various mitigation scenarios.</p>
                </div>

                <h2 className="glow-text" style={{ fontSize: '1.5rem', marginBottom: '16px', marginTop: '32px' }}>Problem</h2>
                <div className="about-text">
                  <p>Environmental monitoring data is often disconnected, static, and retrospective. City planners and citizens need forward-looking intelligence to prepare for pollution spikes and understand the potential impact of hypothetical environmental interventions.</p>
                </div>
             </div>
             
             <div className="about-visuals-column">
                <div className="stat-card" style={{ padding: '32px' }}>
                  <div className="stat-value" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Architecture & Features</div>
                  <div className="core-values" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Mapping: Folium dynamic overlays</div>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Forecasting: 7-Day ML predictive analytics</div>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Simulations: Interactive dashboard parameters</div>
                  </div>
                </div>
                
                <div className="stat-card" style={{ padding: '32px' }}>
                   <div className="stat-value" style={{ fontSize: '1.25rem' }}>Tech Stack</div>
                   <div className="hero-roles-tokens" style={{ marginTop: '16px' }}>
                     <span className="role-token">Python</span>
                     <span className="role-token">Streamlit</span>
                     <span className="role-token">Pandas</span>
                     <span className="role-token">Folium</span>
                     <span className="role-token">Plotly</span>
                     <span className="role-token">Scikit-learn</span>
                   </div>
                </div>
                
                <a href="https://github.com/Not-muzzyy/virtual-pollution-intelligence-grid" target="_blank" rel="noopener noreferrer" className="interactive-btn btn-primary" style={{ marginTop: '16px', width: 'fit-content' }}>
                  <span className="btn-text">View Source Code</span>
                  <span className="link-arrow">→</span>
                  <div className="btn-glow" aria-hidden="true"></div>
                </a>
             </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
