package com.piratechess.fileUtil;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class ZipFile {
    public static void zip(final String srcFile) throws IOException {
        final FileOutputStream fos = new FileOutputStream(FileConstants.GAME_LOG_DIRECTORY + "/" + srcFile + ".zip");
        final ZipOutputStream zipOut = new ZipOutputStream(fos);
        final File fileToZip = new File(srcFile);
        final FileInputStream fis = new FileInputStream(fileToZip);
        final ZipEntry zipEntry = new ZipEntry(fileToZip.getName());
        zipOut.putNextEntry(zipEntry);
        final byte[] bytes = new byte[1024];
        int length;
        while ((length = fis.read(bytes)) >= 0)
            zipOut.write(bytes, 0, length);
        zipOut.close();
        fis.close();
        fos.close();
    }
}