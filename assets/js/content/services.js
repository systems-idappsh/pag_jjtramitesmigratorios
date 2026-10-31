(function () {
  "use strict";

  function service(name, summary, description, situations) {
    return Object.freeze({
      name: name,
      summary: summary,
      description: description,
      situations: Object.freeze(situations.slice())
    });
  }

  var categories = [
    Object.freeze({
      id: "family-law",
      number: "01",
      slug: "derecho-familiar",
      name: "Asuntos familiares",
      eyebrow: "Derecho familiar",
      description: "Asesoría jurídica para divorcios, pensión alimenticia, custodia, convivencia y acuerdos familiares.",
      icon: "family",
      services: Object.freeze([
        service(
          "Divorcios y convenios matrimoniales",
          "Orientación para la disolución del matrimonio y los acuerdos asociados.",
          "Asesoría sobre divorcio voluntario, incausado y procedimientos con controversia cuando correspondan conforme a la legislación aplicable. Incluye orientación relativa a convenios entre cónyuges, obligaciones y bienes matrimoniales.",
          ["Iniciar un divorcio", "Revisar o formular un convenio", "Atender desacuerdos sobre sus consecuencias"]
        ),
        service(
          "Pensión alimenticia",
          "Orientación para solicitar, revisar o exigir obligaciones alimentarias.",
          "Asesoría sobre solicitudes de pensión, revisión o modificación del monto cuando proceda y orientación ante pagos atrasados o incumplimientos.",
          ["Fijación de pensión", "Incumplimiento o adeudos", "Cambios en necesidades o circunstancias económicas"]
        ),
        service(
          "Custodia, convivencia y resoluciones familiares",
          "Atención a acuerdos y controversias sobre guarda, custodia y convivencia.",
          "Orientación sobre guarda y custodia, régimen de visitas, acuerdos de convivencia y posibles solicitudes de modificación de convenios o resoluciones familiares, considerando el interés superior de niñas, niños y adolescentes.",
          ["Definir custodia", "Acordar horarios de convivencia", "Revisar medidas existentes"]
        )
      ])
    }),
    Object.freeze({
      id: "civil-law",
      number: "02",
      slug: "derecho-civil",
      name: "Asuntos civiles",
      eyebrow: "Derecho civil",
      description: "Asesoría para contratos, convenios, controversias civiles y reclamaciones legales.",
      icon: "balance",
      services: Object.freeze([
        service(
          "Contratos y acuerdos legales",
          "Elaboración, revisión y orientación sobre contratos y convenios.",
          "Asistencia para revisar condiciones, derechos y obligaciones contractuales; elaboración o modificación de acuerdos y orientación ante posibles incumplimientos.",
          ["Firma de contratos", "Dudas sobre cláusulas", "Modificaciones o incumplimientos"]
        ),
        service(
          "Juicios civiles y reclamaciones",
          "Orientación sobre controversias civiles y reclamaciones legales.",
          "Asesoría en procedimientos judiciales civiles, presentación o contestación de demandas cuando proceda y reclamaciones vinculadas con daños, perjuicios y responsabilidad civil.",
          ["Recibir o iniciar una demanda", "Controversias entre particulares", "Reclamaciones por daños"]
        ),
        service(
          "Asesoría jurídica y consultas civiles",
          "Orientación jurídica general y revisión preliminar de documentos.",
          "Consultas jurídicas sobre derechos y obligaciones civiles, estudio preliminar de antecedentes, orientación preventiva y asistencia en acuerdos entre particulares.",
          ["Dudas sobre derechos civiles", "Revisión documental previa", "Acuerdos y convenios entre particulares"]
        )
      ])
    }),
    Object.freeze({
      id: "migration",
      number: "03",
      slug: "tramites-migratorios",
      name: "Trámites migratorios",
      eyebrow: "Estados Unidos",
      description: "Orientación documental para visas, formularios consulares y determinados procedimientos migratorios relacionados con Estados Unidos.",
      icon: "migration",
      services: Object.freeze([
        service(
          "Visas B1/B2 y formulario DS-160",
          "Apoyo documental para visas de negocios o turismo.",
          "Orientación general sobre la visa B1/B2, asistencia para completar y revisar la información del DS-160, organización documental y preparación general para la cita consular.",
          ["Primera solicitud", "Dudas sobre el DS-160", "Preparación general para la entrevista"]
        ),
        service(
          "Visas de inmigrante y formulario DS-260",
          "Orientación documental para determinados procesos de visa de inmigrante.",
          "Apoyo para organizar requisitos y completar o revisar el DS-260, con información general sobre las etapas administrativas del proceso aplicable.",
          ["Dudas sobre campos del DS-260", "Organización de requisitos", "Preparación para etapas consulares"]
        ),
        service(
          "Perdones migratorios y orientación especializada",
          "Orientación preliminar sobre situaciones que podrían requerir un waiver.",
          "Identificación inicial de dudas, organización de antecedentes y canalización a asesoría jurídica estadounidense autorizada cuando el caso lo requiera. No supone determinar elegibilidad ni garantizar resultados.",
          ["Dudas sobre inadmisibilidad", "Organización de antecedentes", "Necesidad de evaluación especializada"]
        )
      ])
    }),
    Object.freeze({
      id: "consular-support",
      number: "04",
      slug: "acompanamiento-embajadas",
      name: "Acompañamiento consular y adultos mayores",
      eyebrow: "Asistencia documental y logística",
      description: "Preparación, organización de viajes y acompañamiento para citas consulares, con atención personalizada a personas adultas mayores.",
      icon: "embassy",
      services: Object.freeze([
        service(
          "Preparación y asesoría consular",
          "Orientación previa a una cita en embajada o consulado.",
          "Información general sobre requisitos, preparación y revisión orientativa de documentos, ubicación de instalaciones, horarios y pasos administrativos previos a la cita.",
          ["Organizar documentos", "Comprender instrucciones", "Preparar un itinerario básico"]
        ),
        service(
          "Viajes organizados y acompañamiento",
          "Coordinación logística para traslados relacionados con citas consulares.",
          "Apoyo en la planeación de fechas, itinerarios, traslados y orientación logística. La disponibilidad de transporte y acompañamiento debe confirmarse para cada destino.",
          ["Traslado grupal", "Planeación de viaje", "Coordinación de horarios"]
        ),
        service(
          "Atención especializada para adultos mayores",
          "Apoyo accesible para preparar documentos y traslados consulares.",
          "Explicación de requisitos, apoyo para organizar documentación y coordinación de asistencia de viaje según las necesidades y servicios disponibles.",
          ["Explicación clara de requisitos", "Organización documental", "Acompañamiento logístico"]
        )
      ])
    }),
    Object.freeze({
      id: "passports",
      number: "05",
      slug: "pasaportes",
      name: "Trámite de pasaportes",
      eyebrow: "Documentación oficial",
      description: "Orientación para solicitudes y renovaciones de pasaportes mexicanos y estadounidenses.",
      icon: "passport",
      services: Object.freeze([
        service(
          "Pasaporte mexicano",
          "Orientación para obtener o renovar el pasaporte mexicano.",
          "Asistencia para identificar requisitos de primera expedición o renovación e información general para gestionar la cita ante la autoridad competente.",
          ["Primera solicitud", "Renovación", "Dudas sobre documentos y citas"]
        ),
        service(
          "Pasaporte estadounidense",
          "Orientación para solicitudes iniciales y renovaciones del pasaporte estadounidense.",
          "Información general sobre formularios, documentos y vías de solicitud o renovación, incluida la orientación sobre citas cuando sean requeridas.",
          ["Primera solicitud", "Renovación según elegibilidad", "Dudas sobre formularios"]
        )
      ])
    })
  ];

  function getCategory(slug) {
    return categories.find(function (category) { return category.slug === slug; }) || null;
  }

  window.JJ = window.JJ || {};
  window.JJ.services = Object.freeze(categories);
  window.JJ.getCategory = getCategory;
})();
