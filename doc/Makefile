
BASENAME=readme

TARGETS=\
	$(BASENAME).html\
	$(BASENAME).docx\
	$(BASENAME).epub\
	$(BASENAME).pdf\

all: $(TARGETS)

clean:
	rm -rf $(TARGETS) *~

###
# LuaTeX
# https://qiita.com/sky_y/items/15bf7737f4b37da50372

#STYLE=haddock
#STYLE=tango
STYLE=breezeDark
PANDOCOPT=--highlight-style=$(STYLE) --pdf-engine=lualatex -V documentclass=ltjsarticle -V luatexjapresetoptions=hiragino-pron
PANDOC=/usr/local/bin/pandoc $(PANDOCOPT)

## import.js
# for import.js
init-for-imports:
	npm install traverse
	npm install event-stream

$(BASENAME).html: $(BASENAME).md
	$(PANDOC) -f markdown $(BASENAME).md -o $(BASENAME).html

$(BASENAME).docx: $(BASENAME).md
	$(PANDOC) -f markdown $(BASENAME).md --reference-doc=reference.docx -o $(BASENAME).docx

$(BASENAME).pdf: $(BASENAME).md
	$(PANDOC) -f markdown $(BASENAME).md -o $(BASENAME).pdf

$(BASENAME).epub: $(BASENAME).md
	$(PANDOC) -f markdown $(BASENAME).md -o $(BASENAME).epub

# reference.docx:
#	$(PANDOC) --print-default-data-file reference.docx > reference.docx
