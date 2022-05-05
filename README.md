CREATE TABLE IF NOT EXISTS public.contato
(
    id integer NOT NULL DEFAULT nextval('contato_id_seq'::regclass),
    nome character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    celular character varying(15) COLLATE pg_catalog."default" NOT NULL,
    observacao character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT contato_pkey PRIMARY KEY (id)
)