import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'; 
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { InputSelect } from '../../../components/Inputs/InputSelect/InputSelect.jsx'; 
import { ButtonDownloads } from '../../../components/Buttons/ButtonDownloads/ButtonDownloads.jsx';
import { TIPOS_INFORME, OPCIONES_DINAMICAS } from '../../../mock/informes/informesMockeo.js';
import './InformeComponent.css'

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker; 

export function InformeComponent({ tipoInforme = 'mensual' }) {

    const opcionesSecundarias = OPCIONES_DINAMICAS[tipoInforme] || [];

    const [informeSeleccionado, setInformeSeleccionado] = useState(
        opcionesSecundarias.length > 0 ? opcionesSecundarias[0].id : ''
    );

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); 

    const informeActual = opcionesSecundarias.find(op => op.id === informeSeleccionado);
    const downloadUrl = informeActual ? informeActual.url : null;
    const tipoDescripcion = TIPOS_INFORME.find(t => t.id === tipoInforme)?.descripcion || 'Informe';

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1); 
    };

    const handleInformeChange = (event) => {
        setInformeSeleccionado(event.target.value);
        setNumPages(null); 
        setPageNumber(1);
    };

    const getPageWidth = () => {
        if (window.innerWidth > 768) {
            return 600;
        }
        return window.innerWidth * 0.9;
    };

    const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
    const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages));

    return (
        <div className="informes-content-container">
            
            <div className="filtros-descarga-wrapper">
                {opcionesSecundarias.length > 0 && (
                    <InputSelect 
                        text={`Seleccionar ${tipoDescripcion}`}
                        color="#E68E27"
                        name="informeSeleccionado"
                        value={informeSeleccionado}
                        handleChange={handleInformeChange}
                        listaDeOpciones={opcionesSecundarias}
                    />
                )}

                <ButtonDownloads 
                    downloadUrl={downloadUrl} 
                    tipoInforme={tipoInforme} 
                    informeSeleccionado={informeSeleccionado}
                    backgroundColor="#E68E27"
                />
            </div>
            
            <div className="pdf-viewer-wrapper flex flex-col items-center w-full"> 
                {downloadUrl ? (
                    <>
                        <Document
                            file={downloadUrl}
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading="Cargando vista previa..."
                            error="Error al cargar el PDF. Asegúrate que la URL sea pública."
                            className="react-pdf-document shadow-xl rounded-lg overflow-hidden"
                        >
                            <Page 
                                pageNumber={pageNumber}
                                width={getPageWidth()}
                                renderAnnotationLayer={true}
                                renderTextLayer={true}
                                className="pdf-page border-b border-gray-300"
                            />
                        </Document>

                        {numPages > 1 && (
                            <div className="pagination-controls flex items-center gap-4 mt-4">
                                <button 
                                    onClick={goToPrevPage} 
                                    disabled={pageNumber <= 1}
                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                                >
                                    ◀ Anterior
                                </button>
                                <span className="text-gray-700">
                                    Página {pageNumber} de {numPages}
                                </span>
                                <button 
                                    onClick={goToNextPage} 
                                    disabled={pageNumber >= numPages}
                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                                >
                                    Siguiente ▶
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="pdf-viewer-placeholder p-8 bg-gray-100 rounded-lg text-center text-gray-600 border border-gray-300 w-full max-w-lg">
                        <p className="font-semibold">Seleccione un informe para ver la vista previa.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
