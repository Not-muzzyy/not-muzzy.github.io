import React from "react"; 

export default function ComparisonTable() { 
  return ( 
    <section id="comparison">
      <div className="section-label">Technical Architecture</div>
      <h2 className="section-title">Security Architectures</h2> 
      <p className="hero-subtitle mb-12" style={{ maxWidth: '800px' }}> 
        Comparing conventional rule-based SOC monitoring against modern ML and RAG architectures developed across my projects. 
      </p> 

      {/* Comparison Data Table */} 
      <div className="comparison-container"> 
        <table className="comparison-table"> 
          <thead> 
            <tr> 
              <th scope="col">Capability / Dimension</th> 
              <th scope="col">Traditional Rule-Based Security</th> 
              <th scope="col" className="highlight-col">AI-Augmented (My Approach)</th> 
            </tr> 
          </thead> 
          <tbody> 
            <tr> 
              <th scope="row">Threat Detection</th> 
              <td>Static regex rules & rigid thresholds; misses zero-day mutations.</td> 
              <td className="highlight-col">Ensemble ML classification with 97% phishing accuracy & anomaly detection.</td> 
            </tr> 
            <tr> 
              <th scope="row">Alert Explainability</th> 
              <td>Black-box alert logs requiring manual packet inspection.</td> 
              <td className="highlight-col">SHAP feature contribution values explaining why each threat was flagged.</td> 
            </tr> 
            <tr> 
              <th scope="row">Incident Reporting</th> 
              <td>Manual report compilation taking 30–45 minutes per triage.</td> 
              <td className="highlight-col">Sub-second automated narrative reports generated via Groq LLaMA 3.1 inference.</td> 
            </tr> 
            <tr> 
              <th scope="row">Knowledge Retrieval</th> 
              <td>Keyword-based document search with high false-positive rates.</td> 
              <td className="highlight-col">Dense vector similarity search using FAISS & LangChain RAG pipelines.</td> 
            </tr> 
          </tbody> 
        </table> 
      </div> 

      {/* Code Demonstration Block */} 
      <div className="code-demo"> 
        <div className="code-header"> 
          <span className="code-filename"><i className="fa-solid fa-code mr-2"></i> pipeline_demo.py</span> 
          <span className="code-lang">Python 3.11</span> 
        </div> 
        <div className="code-body">
          <pre> 
            <code>{`from langchain_community.vectorstores import FAISS 
from langchain_groq import ChatGroq 
from langchain.chains import RetrievalQA 

def build_rag_pipeline(documents, embeddings, query): 
    """Sub-second vector retrieval pipeline used in EduSathi.""" 
    vector_db = FAISS.from_documents(documents, embeddings) 
    retriever = vector_db.as_retriever(search_kwargs={"k": 4}) 
    llm = ChatGroq(model_name="llama-3.1-70b-versatile", temperature=0.1) 
    qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever) 
    return qa_chain.run(query)`}</code> 
          </pre> 
        </div>
      </div> 

      {/* Industry Quote Block */} 
      <blockquote className="thesis-quote"> 
        <p> 
          "Modern cybersecurity defense requires transitioning from rigid, reactive signatures to proactive, explainable machine intelligence. Engineering systems with transparent reasoning like SHAP bridges the critical trust gap between AI models and SOC analysts." 
        </p>
        <footer> 
          — Mohammed Muzammil C, Architectural Design Thesis (2026) 
        </footer> 
      </blockquote> 
    </section> 
  ); 
}
