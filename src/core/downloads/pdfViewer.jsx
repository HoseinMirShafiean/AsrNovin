
const PdfViewer = ({ pdfFile }) => {

    return (
        <iframe
            src={pdfFile}
            width="80%"
            height="200px"
            title="نمایش"
        />
    )
}

export default PdfViewer;