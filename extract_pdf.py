import fitz  # PyMuPDF

def extract_pdf_content(pdf_path):
    try:
        # Open the PDF file
        pdf_document = fitz.open(pdf_path)
        
        # Extract text from each page
        text = ""
        for page_num in range(min(5, len(pdf_document))):  # First 5 pages or all if less
            page = pdf_document[page_num]
            text += page.get_text() + "\n\n"
        
        return text
    except Exception as e:
        return f"Error extracting PDF: {str(e)}"

if __name__ == "__main__":
    pdf_path = r"public\final (2).pdf"
    content = extract_pdf_content(pdf_path)
    print("Extracted content from PDF:")
    print("-" * 50)
    print(content[:2000])  # Print first 2000 chars to avoid too much output
