import fitz

def analyze_pdf_structure(pdf_path):
    try:
        doc = fitz.open(pdf_path)
        print(f"PDF has {len(doc)} pages")
        
        # Check first page
        page = doc[0]
        print("\nPage 1 blocks:")
        
        # Get text blocks
        blocks = page.get_text("blocks")
        for i, block in enumerate(blocks[:10]):  # First 10 blocks
            print(f"\nBlock {i+1}:")
            print(f"Type: {block[6]}")
            print(f"Text: {block[4][:200]}..." if block[4] else "No text")
            
    except Exception as e:
        print(f"Error analyzing PDF: {str(e)}")

if __name__ == "__main__":
    pdf_path = r"public\final (2).pdf"
    analyze_pdf_structure(pdf_path)
