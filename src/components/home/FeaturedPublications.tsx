import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { openPdfViewer, isLocalPath } from '@/utils/pdfUtils';

// Get latest publication from each category
const getLatestPublications = () => {
  // Hardcoded latest publications (these should match the latest from each category in Publications.tsx)
  return [
    {
      id: 1,
      title: "Claude AI",
      excerpt: "A comprehensive exploration of Claude's capabilities and its impact on artificial intelligence development.",
      category: "Articles",
      author: "Sai Kushal",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      pdfUrl: "/pdfs/articles/claude-ai.pdf"
    },
    {
      id: 2,
      title: "Annual Magazine 2023-2024",
      excerpt: "The latest edition of our annual magazine highlighting exceptional student projects, faculty research, cultural events, and academic milestones from 2023-2024.",
      category: "Annual Magazine",
      author: "The Compendium Team",
      image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "/pdfs/annualmagazine/Annual Magazine_2023-2024.pdf"
    },
    {
      id: 3,
      title: "News Edition 10",
      excerpt: "Covering international collaborations, faculty achievements, and upcoming initiatives.",
      category: "College News",
      author: "The Compendium Team",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "/pdfs/collegenews/news_edition_10.pdf"
    }
  ];
};

const publications = getLatestPublications();

const FeaturedPublications = () => {
  const navigate = useNavigate();

  const handleReadArticle = (pdfUrl: string, title: string) => {
    if (isLocalPath(pdfUrl)) {
      // Use our custom PDF viewer with the filename
      const fileName = pdfUrl.split('/').pop() || 'document';
      openPdfViewer(navigate, pdfUrl, fileName);
    } else {
      navigate(`/view-pdf/${encodeURIComponent(pdfUrl)}`);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block py-1 px-3 mb-4 text-xs font-medium bg-secondary rounded-full text-secondary-foreground">
              Featured Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Publications</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our collection of outstanding publications including articles, annual magazines, and college news.
            </p>
          </div>
          <Link 
            to="/publications" 
            className="mt-6 md:mt-0 inline-flex items-center text-sm font-medium hover:text-primary/70 transition-colors group"
          >
            View all publications
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <article 
              key={pub.id} 
              className="group flex flex-col bg-card rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pub.image} 
                  alt={pub.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block py-1 px-3 text-xs font-medium bg-black/70 text-white rounded-full">
                    {pub.category}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col flex-grow p-6">
                <h3 className="font-serif text-xl font-medium mb-2">
                  {pub.title}
                </h3>

                <div className="mb-3 flex items-center text-xs text-muted-foreground">
                  <span>{pub.author}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {pub.excerpt}
                </p>
                
                <button 
                  onClick={() => handleReadArticle(pub.pdfUrl, pub.title)}
                  className="mt-auto inline-flex items-center text-sm font-medium hover:text-primary/70 transition-colors self-start"
                >
                  Read publication
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPublications;
