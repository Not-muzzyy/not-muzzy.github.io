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
        <section className="flex-grow px-6 max-w-3xl mx-auto w-full py-12">
          <div className="mb-12">
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dim)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
              Project Case Study
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Virtual Pollution Intelligence Grid
            </h1>
            <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
              Interactive geospatial monitoring dashboard with 7-day AI risk forecasting and scenario simulations.
            </p>
          </div>

          <div style={{ color: 'var(--text-muted)', lineHeight: 1.8 }} className="space-y-8">
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>What is the Virtual Pollution Intelligence Grid?</h2>
              <p>
                An interactive environmental intelligence platform that visualizes pollution metrics on a geospatial grid, predicting upcoming environmental hazards and allowing users to simulate various mitigation scenarios.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Problem</h2>
              <p>
                Environmental monitoring data is often disconnected, static, and retrospective. City planners and citizens need forward-looking intelligence to prepare for pollution spikes and understand the potential impact of hypothetical environmental interventions.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Architecture & Features</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Geospatial Mapping:</strong> Real-time overlay of pollution metrics mapped dynamically using Folium.</li>
                <li><strong>7-Day Risk Forecasting:</strong> ML-powered predictive analytics extending pollution trends into the near future.</li>
                <li><strong>Scenario Simulation:</strong> Interactive dashboard allowing users to alter variables (e.g., traffic volume, factory output) to visualize hypothetical impacts on the local environment.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Technology Stack</h2>
              <p>
                Python, Streamlit, Pandas, Folium, Plotly, Scikit-learn.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Status</h2>
              <p>
                Presented and built at Chakravyuha 3.0 Hackathon.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Repository & Links</h2>
              <p>
                <a href="https://github.com/not-muzzyy/virtual-pollution-intelligence-grid" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-glow)', textDecoration: 'none' }}>View Source Code on GitHub</a>
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Author</h2>
              <p>
                Mohammed Muzammil C
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
