import PyPDF2
import re

def extract_text_from_pdf(pdf_path):
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
    return text

def analyze_paper(text):
    # Extract title (first line that's not empty and has more than 2 words)
    title = ""
    for line in text.split('\n'):
        if len(line.split()) > 2:
            title = line.strip()
            break
    
    # Extract authors (usually follows the title)
    authors = []
    lines = text.split('\n')
    for i, line in enumerate(lines):
        if line.strip() == title and i + 1 < len(lines):
            next_line = lines[i+1].strip()
            if next_line and not next_line[0].isdigit():
                authors = [a.strip() for a in next_line.split(',')]
                break
    
    # Extract abstract (look for common abstract patterns)
    abstract = ""
    abstract_starters = ["abstract", "a b s t r a c t"]
    for i, line in enumerate(text.lower().split('\n')):
        if any(starter in line.lower() for starter in abstract_starters):
            abstract_lines = []
            for abstract_line in text.split('\n')[i+1:i+20]:  # Next 20 lines
                if abstract_line.strip() and not abstract_line[0].isdigit():
                    abstract_lines.append(abstract_line.strip())
                else:
                    break
            abstract = ' '.join(abstract_lines)
            break
    
    # Extract key topics (look for section headers)
    topics = []
    for line in text.split('\n'):
        line = line.strip()
        if len(line.split()) <= 5 and line.isupper() and line.isalpha():
            topics.append(line)
    
    return {
        'title': title,
        'authors': authors,
        'abstract': abstract,
        'topics': topics[:5]  # Return top 5 topics
    }

if __name__ == "__main__":
    pdf_path = r"public\final (2).pdf"
    try:
        text = extract_text_from_pdf(pdf_path)
        analysis = analyze_paper(text)
        print("Analysis Results:")
        print(f"Title: {analysis['title']}")
        print(f"Authors: {', '.join(analysis['authors'])}")
        print(f"Abstract: {analysis['abstract'][:300]}...")
        print(f"Key Topics: {', '.join(analysis['topics'])}")
    except Exception as e:
        print(f"Error analyzing PDF: {str(e)}")
