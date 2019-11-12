package com.piratechess.fileUtil;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

public class UnzipFile {
    public static void unzip(final String fileZip) throws IOException {
        final File destDir = new File(FileConstants.GAME_LOG_DIRECTORY);
        final byte[] buffer = new byte[1024];
        final ZipInputStream zis = new ZipInputStream(new FileInputStream(fileZip));
        ZipEntry zipEntry = zis.getNextEntry();
        int len;
        while (zipEntry != null) {
            final File newFile = newFile(destDir, zipEntry);
            final FileOutputStream fos = new FileOutputStream(newFile);
            while ((len = zis.read(buffer)) > 0)
                fos.write(buffer, 0, len);
            fos.close();
            zipEntry = zis.getNextEntry();
        }
        zis.closeEntry();
        zis.close();
    }
    
    public static File newFile(File destDir, ZipEntry zippedFile) throws IOException {
        File destFile = new File(destDir, zippedFile.getName());
        
        String destDirPath = destDir.getCanonicalPath();
        String destFilePath = destFile.getCanonicalPath();
        
        if (!destFilePath.startsWith(destDirPath + File.separator)) {
            throw new IOException("Entry is outside of the target dir: " + zippedFile.getName());
        }
        
        return destFile;
    }
}