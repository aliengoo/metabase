CREATE TABLE `item` (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`n`	TEXT,
	`k`	TEXT,
	`d`	TEXT,
	`c`	TEXT,
	`u`	TEXT
);

CREATE UNIQUE INDEX i_item_nk ON item (n, k);
CREATE INDEX i_item_c ON item (c);
CREATE INDEX i_item_u ON item (u);

CREATE TABLE `link` (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`pn`	TEXT NOT NULL,
	`pk`	TEXT NOT NULL,
	`cn`	TEXT NOT NULL,
	`ck`	TEXT NOT NULL,
	`c`	TEXT NOT NULL,
	`u`	TEXT NOT NULL
);


CREATE INDEX i_link_c ON link (c);
CREATE INDEX i_link_u ON link (u);
CREATE INDEX i_link_pnk ON link (pn, pk);
CREATE INDEX i_link_cnk ON link (cn, ck);