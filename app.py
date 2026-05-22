import logging
import json

class JSONFormatter(logging.Formatter):
    def format(self, record):
        return json.dumps({
            "timestamp": self.formatTime(record),
            "level": record.levelname,
            "message": record.getMessage()
        })

logger = logging.getLogger()
handler = logging.FileHandler("app.log")
handler.setFormatter(JSONFormatter())

logger.addHandler(handler)
logger.setLevel(logging.INFO)

logger.info("Aplicação Iniciada")
logger.error("Erro no Sistema")
