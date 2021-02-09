export const tableNodeSpec = {
    content: "table_head table_body*",
    isolating: true,
    group: "block",
    selectable: false,
    parseDOM: [{ tag: "table" }],
    toDOM() {
        return [
            "div",
            { class: "s-table-container" },
            ["table", { class: "s-table" }, 0],
        ];
    },
};

export const tableHeadNodeSpec = {
    content: "table_row",
    isolating: true,
    group: "table_block",
    selectable: false,
    parseDOM: [{ tag: "thead" }],
    toDOM() {
        return ["thead", 0];
    },
};

export const tableBodyNodeSpec = {
    content: "table_row+",
    isolating: true,
    group: "table_block",
    selectable: false,
    parseDOM: [{ tag: "tbody" }],
    toDOM() {
        return ["tbody", 0];
    },
};

export const tableRowNodeSpec = {
    content: "(table_cell | table_header)+",
    isolating: true,
    group: "table_block",
    selectable: false,
    parseDOM: [{ tag: "tr" }],
    toDOM() {
        return ["tr", 0];
    },
};

export const tableCellNodeSpec = {
    content: "inline*",
    isolating: true,
    group: "table_block",
    selectable: false,
    attrs: {
        style: { default: null },
    },
    parseDOM: [
        {
            tag: "td",
            getAttrs(dom) {
                const textAlign = dom.style.textAlign;
                return textAlign ? { style: `text-align: ${textAlign}` } : null;
            },
        },
    ],
    toDOM(node) {
        return ["td", node.attrs, 0];
    },
};

export const tableHeaderNodeSpec = {
    content: "inline*",
    isolating: true,
    group: "table_block",
    selectable: false,
    attrs: {
        style: { default: null },
    },
    parseDOM: [
        {
            tag: "th",
            getAttrs(dom) {
                const textAlign = dom.style.textAlign;
                return textAlign ? { style: `text-align: ${textAlign}` } : null;
            },
        },
    ],
    toDOM(node) {
        return ["th", node.attrs, 0];
    },
};
